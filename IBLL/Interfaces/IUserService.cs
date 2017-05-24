using MODEL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IBLL.Interfaces
{
    public interface IUserService
    {
        User LoginOrRegister(User user);
    }
}
