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
    public class ClientScheduleValidator : AbstractValidator<ClientSchedule>, IClientScheduleValidator
    {
        public ClientScheduleValidator()
        {
            RuleFor(c => c.IDDay).InclusiveBetween(1, 8).WithMessage("Envío incorrecto de días");
            RuleFor(c => c.From)
                .NotEmpty()
                .WithMessage("Debe definir horarios de apertura")
                .LessThan(c => c.To)
                .WithMessage("La hora de apertura debe ser menor a la de cierre");
            RuleFor(c => c.To).NotEmpty().WithMessage("Debe definir horarios de fin");
            RuleFor(c => c).Must(this.IsNoonBreakOk).WithMessage("Debe definir horarios de apertura y fin después del almuerzo");
            RuleFor(c => c).Must(this.CheckBreakDates).WithMessage("La hora de apertura debe ser menor a la de cierre");
        }

        private bool CheckBreakDates(ClientSchedule entity)
        {
            if (entity.NoonBreak &&
                (entity.FromBreak.HasValue && entity.ToBreak.HasValue)
                &&
                (entity.FromBreak.Value >= entity.ToBreak.Value))
                return false;

            return true;
        }

        private bool IsNoonBreakOk(ClientSchedule entity)
        {
            if (entity.NoonBreak && (!entity.FromBreak.HasValue || !entity.ToBreak.HasValue))
                return false;
            else
                return true;
        }
    }
}
