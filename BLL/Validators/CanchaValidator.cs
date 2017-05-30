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
    public class CanchaValidator : AbstractValidator<Cancha>, ICanchaValidator
    {
        public CanchaValidator()
        {
            RuleFor(c => c.Descripcion).NotEmpty();
            RuleFor(c => c.Valor1).NotEmpty().GreaterThan(0);
            RuleFor(c => c.Valor2).NotEmpty().GreaterThan(0);
            RuleFor(c => c.Valor3).NotEmpty().GreaterThan(0);
            RuleFor(c => c.Valor4).NotEmpty().GreaterThan(0);
        }
    }
}
