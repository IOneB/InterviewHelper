using InterviewHelper.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace InterviewHelper.Domain
{
	public class HumanResourcesContext : DbContext
	{
		public DbSet<HumanResource> HumanResources { get; set; }

		public HumanResourcesContext(DbContextOptions<HumanResourcesContext> options) : base(options) { }
	}
}
