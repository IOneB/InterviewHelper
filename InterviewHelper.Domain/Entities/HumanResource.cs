using System;
using System.ComponentModel.DataAnnotations;

namespace InterviewHelper.Domain.Entities
{
    public class HumanResource
    {
        [Key]
        public long Id { get; set; }
        public string Name { get; set; }
        public DateTime? DateInput { get; set; }

        public string Answer { get; set; }
    }
}
