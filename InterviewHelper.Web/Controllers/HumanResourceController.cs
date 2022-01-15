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
        public Task<List<HumanResource>> Get()
        {
            _humanResourceContext.HumanResources.Add(new HumanResource
            {
                Name = "Я",
                DateInput = System.DateTime.Now
            });
            _humanResourceContext.SaveChanges();
            return _humanResourceContext.HumanResources.AsNoTracking().ToListAsync();
        }


        //[HttpGet]
        //public Task<List<Work>> Get()
        //{
        //    return _workService.GetAsync();
        //}

        //[HttpGet("{id}", Name = "GetWork")]
        //public async Task<ActionResult<Work>> Details(string id)
        //{
        //    var work = await _workService.GetAsync(id);

        //    if (work is null)
        //        return NotFound();

        //    return work;
        //}

        //[HttpPost]
        //public async Task<IActionResult> Create(Work work)
        //{
        //    await _workService.CreateAsync(work);

        //    return CreatedAtAction("GetWork", new { id = work.Id }, work);
        //}

        //[HttpPut("{id}")]
        //public async Task<IActionResult> Update(string id, Work workIn)
        //{
        //    var work = await _workService.GetAsync(id);
        //    if (work is null)
        //        return NotFound();

        //    await _workService.UpdateAsync(id, workIn);

        //    return NoContent();
        //}

        //[HttpDelete("{id}")]
        //public async Task<IActionResult> Delete(string id)
        //{
        //    var work = await _workService.GetAsync(id);
        //    if (work is null)
        //        return NotFound();

        //    await _workService.RemoveAsync(work.Id);
        //    return NoContent();
        //}
    }
}
