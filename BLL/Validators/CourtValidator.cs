using FluentValidation;
using IBLL.Interfaces;
using MODEL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Validators
{
    public class CourtValidator : AbstractValidator<Court>, ICourtValidator
    {
        public CourtValidator()
        {
            RuleFor(c => c.Description).NotEmpty();
            RuleFor(c => c.Value1).NotEmpty().GreaterThanOrEqualTo(0);
            RuleFor(c => c.Value2).NotEmpty().GreaterThanOrEqualTo(0);
            RuleFor(c => c.Value3).NotEmpty().GreaterThanOrEqualTo(0);
            RuleFor(c => c.Value4).NotEmpty().GreaterThanOrEqualTo(0);
        }
    }
}
