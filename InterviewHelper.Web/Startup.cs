using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;

namespace InterviewHelper.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services
                .AddDbContext<HumanResourcesContext>(options =>
                {
                    string connectionString = Configuration.GetConnectionString("HumanResourcesContext");
                    var context = options.UseNpgsql(connectionString);
                })
                .AddSpaStaticFiles(config => config.RootPath = "wwwroot");

            services.AddControllers();

            services.AddCors(opt =>
            {
                opt.AddPolicy("VueCorsPolicy", builder =>
                {
                    builder.AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowCredentials()
                    .WithOrigins("https://little-interview-helper.herokuapp.com");
                });
            });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);

            if (env.IsDevelopment())
                app.UseDeveloperExceptionPage();

            app.UseCors("VueCorsPolicy");

            app.UseAuthentication();
            app.UseRouting();

            app.UseEndpoints(endpoints => endpoints.MapControllers());
            app.UseSpaStaticFiles();

            app.UseSpa(spa =>
            {
                if (env.IsDevelopment())
                {
                    spa.UseProxyToSpaDevelopmentServer("http://localhost:8080");
                }
            });

            Migrate(app);
        }

        private static void Migrate(IApplicationBuilder app)
        {
            var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope();
            var context = serviceScope.ServiceProvider.GetService<HumanResourcesContext>();
            context.Database.Migrate();
        }
    }
}
