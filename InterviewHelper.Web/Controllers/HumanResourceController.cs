using InterviewHelper.Domain;
using InterviewHelper.Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace InterviewHelper.Web.Controllers
{
    [ApiController]
	[Route("api/[controller]")]
	public class HumanResourceController : ControllerBase
	{
		private readonly HumanResourcesContext _humanResourceContext;

		public HumanResourceController(HumanResourcesContext humanResourceContext)
		{
			_humanResourceContext = humanResourceContext;
		}

		[HttpGet]
		public Task<List<HumanResource>> GetAll() => _humanResourceContext.HumanResources.AsNoTracking().ToListAsync();

		[HttpGet("{id}", Name = "GetHumanResource")]
		public async Task<ActionResult<HumanResource>> Details(long id)
		{
			var human = await _humanResourceContext.HumanResources.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);

			if (human is null)
				return NotFound();

			return human;
		}

		[HttpPost]
		public async Task<IActionResult> Create(HumanResource humanResource)
		{
			await _humanResourceContext.HumanResources.AddAsync(humanResource);
			await _humanResourceContext.SaveChangesAsync();

			return CreatedAtAction("Create", new { id = humanResource.Id }, humanResource);
		}

		[HttpPut("{id:int}")]
		public async Task<IActionResult> Update(long id, HumanResource humanResourceIn)
		{
			var humanResource = await _humanResourceContext.HumanResources.FirstOrDefaultAsync(x => x.Id == id);
			if (humanResource is null)
				return NotFound();

			humanResource.Name = humanResourceIn.Name;
			humanResource.Answer = humanResourceIn.Answer;

			await _humanResourceContext.SaveChangesAsync();

			return NoContent();
		}

		[HttpDelete("{id:int}")]
		public async Task<IActionResult> Delete(long id)
		{
			var humanResource = await _humanResourceContext.HumanResources.FirstOrDefaultAsync(x => x.Id == id);
			if (humanResource is null)
				return NotFound();

			_humanResourceContext.HumanResources.Remove(humanResource);
			await _humanResourceContext.SaveChangesAsync();

			return NoContent();
		}
	}
}
