using MODEL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IBLL.Interfaces
{
    public interface IClientService
    {
        Cliente Authenticate(string username, string password);
        Cliente GetClienteById(int clientId);
        bool Insert(Cliente model);
    }
}
