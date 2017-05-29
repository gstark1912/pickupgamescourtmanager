using MODEL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IDAL.Interfaces
{
    public interface IClienteRepository : IBaseRepository<Cliente>
    {
        Cliente Authenticate(string username, string password);
    }
}
