using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FluentValidation;
using MODEL;
using IBLL.Interfaces;
using FluentValidation.Results;

namespace BLL.Validators
{
    public class ClientValidator : AbstractValidator<Client>, IClientValidator
    {
        public ClientValidator(ICourtValidator courtValidator, IClientScheduleValidator clientScheduleValidator)
        {
            RuleFor(c => c.Name).NotNull().Length(1, 500).WithMessage("Nombre de complejo requerido");
            RuleFor(c => c.Email).NotNull().Length(1, 100).WithMessage("Email de complejo requerido");
            RuleFor(c => c.Address).NotNull().Length(1, 500).WithMessage("Dirección de complejo requerida");
            RuleFor(c => c.Coordenates).NotNull().Length(1, 100).WithMessage("Debe elegir el punto del mapa donde se encuentra el complejo");

            RuleFor(c => c.Court).SetCollectionValidator(courtValidator);
            RuleFor(c => c.ClientSchedule).SetCollectionValidator(clientScheduleValidator);
            RuleFor(c => c.ClientSchedule).Must(this.CheckDays).WithMessage("Envío incorrecto de días");
        }

        private bool CheckDays(ICollection<ClientSchedule> schedules)
        {
            var list = schedules.Select(x => x.IDDay);
            if (list.Count() != list.Distinct().Count())
                return false;
            return true;
        }
    }

}
