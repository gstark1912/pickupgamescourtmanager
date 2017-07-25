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
            RuleFor(c => c.Description).NotNull().Length(1, 100).WithMessage("El nombre de cancha es requerido");
            /*
            RuleFor(c => c.Value1)
                .NotEmpty()
                .WithMessage("Debe definir un precio para cada tipo de horario de cancha")
                .GreaterThanOrEqualTo(0)
                .WithMessage("Debe definir un precio para cada tipo de horario de cancha");
            RuleFor(c => c.Value2)
                .NotEmpty()
                .WithMessage("Debe definir un precio para cada tipo de horario de cancha")
                .GreaterThanOrEqualTo(0)
                .WithMessage("Debe definir un precio para cada tipo de horario de cancha");
            RuleFor(c => c.Value3)
                .NotEmpty()
                .WithMessage("Debe definir un precio para cada tipo de horario de cancha")
                .GreaterThanOrEqualTo(0)
                .WithMessage("Debe definir un precio para cada tipo de horario de cancha");
            RuleFor(c => c.Value4)
                .NotEmpty()
                .WithMessage("Debe definir un precio para cada tipo de horario de cancha")
                .GreaterThanOrEqualTo(0)
                .WithMessage("Debe definir un precio para cada tipo de horario de cancha");
                */
        }
    }
}
