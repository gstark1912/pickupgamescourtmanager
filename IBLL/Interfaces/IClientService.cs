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
        Client Authenticate(string username, string password);
        Client GetClienteById(int clientId);
        bool Insert(Client model);
        bool Update(Client model);
        bool UpdateCourts(int clientId, List<Court> courts);
        IEnumerable<Client> GetClients();
        PaginationResult<Client> GetClients(PaginationParameters parameters);
    }
}
