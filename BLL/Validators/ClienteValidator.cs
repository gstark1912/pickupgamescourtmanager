using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FluentValidation;
using MODEL;
using IBLL.Interfaces;

namespace BLL.Validators
{
    public class ClienteValidator : AbstractValidator<Cliente>, IClienteValidator
    {
        public ClienteValidator()
        {
            RuleFor(c => c.Nombre).NotNull();
            RuleFor(c => c.Email).NotNull();
            RuleFor(c => c.Direccion).NotNull();
            RuleFor(c => c.Coordenadas).NotNull();
            RuleFor(c => c.Password).NotNull();
        }

    }

}
