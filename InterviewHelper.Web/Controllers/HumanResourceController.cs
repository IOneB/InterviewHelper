using InterviewHelper.DAL.Models.Entities;
using InterviewHelper.Web;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace InterviewHelper.Controllers
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
            var human = await _humanResourceContext.HumanResources.AsNoTracking().Include(x => x.AnswerParts).FirstOrDefaultAsync(x => x.Id == id);

            if (human is null)
                return NotFound();

            return human;
        }

        [HttpPost]
        public async Task<IActionResult> Create(HumanResource humanResource)
        {
            await _humanResourceContext.HumanResources.AddAsync(humanResource);
            await _humanResourceContext.SaveChangesAsync();

            return CreatedAtAction("GetHumanResource", new { id = humanResource.Id }, humanResource);
        }

        [Route("{id:int}")]
        [HttpPut]
        public async Task<IActionResult> Update(long id, HumanResource humanResourceIn)
        {
            var humanResource = await _humanResourceContext.HumanResources.Include(x => x.AnswerParts).FirstOrDefaultAsync(x => x.Id == id);
            if (humanResource is null)
                return NotFound();

            humanResource.Name = humanResourceIn.Name;
            humanResource.DateInput = humanResourceIn.DateInput;
            humanResource.AnswerParts = humanResourceIn.AnswerParts;

            await _humanResourceContext.SaveChangesAsync();

            return NoContent();
        }

        [Route("{id:int}")]
        [HttpDelete]
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
