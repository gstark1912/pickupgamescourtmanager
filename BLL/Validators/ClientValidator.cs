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
    public class ClientValidator : AbstractValidator<Client>, IClientValidator
    {
        public ClientValidator()
        {
            RuleFor(c => c.Name).NotNull();
            RuleFor(c => c.Email).NotNull();
            RuleFor(c => c.Address).NotNull();
            RuleFor(c => c.Coordenates).NotNull();
            RuleFor(c => c.Password).NotNull();
        }

    }

}
