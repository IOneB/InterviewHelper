using InterviewHelper.Domain;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<HumanResourcesContext>(options
	=> options.UseNpgsql(builder.Configuration.GetConnectionString(nameof(HumanResourcesContext))));

builder.Services.AddCors();
builder.Services.AddControllers();

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

app.UseCors(builder => builder
	.AllowAnyHeader()
	.AllowAnyMethod()
	.AllowAnyOrigin());

app.UseRouting();
app.UseEndpoints(endpoints => endpoints.MapControllers());

app.Run();