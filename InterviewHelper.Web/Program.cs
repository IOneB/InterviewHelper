using InterviewHelper.Domain;
using InterviewHelper.Domain.Entities;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
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

app.MapGet("api/HumanResources", (HumanResourcesContext context)
	=> context.HumanResources.AsNoTracking().ToListAsync());

app.MapGet("api/HumanResources/{id}", async (long id, HumanResourcesContext context) =>
{
	var human = await context.HumanResources.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);

	if (human is null)
		return Results.NotFound();

	return Results.Json(human);
});

app.MapPost("api/HumanResources", async (HumanResource humanResource, HumanResourcesContext context) =>
{
	context.HumanResources.Add(humanResource);
	await context.SaveChangesAsync();

	return Results.Created("api/HumanResources", humanResource);
});

app.MapPut("api/HumanResources/{id}", async (long id, HumanResource humanResourceIn, HumanResourcesContext context) =>
{
	var humanResource = await context.HumanResources.FirstOrDefaultAsync(x => x.Id == id);
	if (humanResource is null)
		return Results.NotFound();

	humanResource.Name = humanResourceIn.Name;
	humanResource.Answer = humanResourceIn.Answer;

	await context.SaveChangesAsync();

	return Results.NoContent();
});

app.MapDelete("api/HumanResources/{id}", async (long id, HumanResourcesContext context) =>
{
	var humanResource = await context.HumanResources.FirstOrDefaultAsync(x => x.Id == id);
	if (humanResource is null)
		return Results.NotFound();

	context.HumanResources.Remove(humanResource);
	await context.SaveChangesAsync();

	return Results.NoContent();
});

app.Run();