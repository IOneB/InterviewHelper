using InterviewHelper.DAL.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace InterviewHelper.Web
{
    public class HumanResourcesContext : DbContext
    {
        public DbSet<HumanResource> HumanResources { get; set; }
        public DbSet<AnswerPart> AnswerParts { get; set; }

        public HumanResourcesContext(DbContextOptions options) : base(options) { }
    }
}
