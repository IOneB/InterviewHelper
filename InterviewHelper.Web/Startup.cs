using InterviewHelper.Domain;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
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
			services.AddDbContext<HumanResourcesContext>(options =>
			{
				string connectionString = Configuration.GetConnectionString("HumanResourcesContext");
				var context = options.UseNpgsql(connectionString);
			});

			services.AddCors();
			services.AddControllers();
		}

		public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
		{
			AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);

			app.UseStaticFiles();

			app.UseCors(builder => builder
				.AllowAnyHeader()
				.AllowAnyMethod()
				.AllowAnyOrigin());

			app.UseRouting();
			app.UseEndpoints(endpoints => endpoints.MapControllers());

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
