using FluentValidation.Results;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MODEL
{
    public class CATValidationResult
    {
        public List<string> Errors { get; set; }
        public bool IsValid { get { return this.Errors.Count == 0; } }

        public CATValidationResult(IList<ValidationFailure> errors)
        {
            this.Errors = new List<string>();
            errors.Select(x => x.ErrorMessage).Distinct().ToList().ForEach(e => Errors.Add(e));
        }
    }
}
