using System.ComponentModel.DataAnnotations;

namespace InterviewHelper.DAL.Models.Entities
{
    public class AnswerPart
    {
        [Key]
        public long Id { get; set; }

        public int PartNumber { get; set; }

        public long HumanResourceId { get; set; }

        public string AnswerPartJSON { get; set; }
    }
}
