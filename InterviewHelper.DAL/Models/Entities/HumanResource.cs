using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace InterviewHelper.DAL.Models.Entities
{
    public class HumanResource
    {
        [Key]
        public long Id { get; set; }
        public string Name { get; set; }
        public DateTime? DateInput { get; set; }

        public virtual List<AnswerPart> AsnwerParts { get; set; } = new List<AnswerPart>();
    }
}
