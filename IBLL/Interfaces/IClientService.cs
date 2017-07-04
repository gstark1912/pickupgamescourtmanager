using FluentValidation.Results;
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
        CATValidationResult Insert(Client model);
        CATValidationResult UpdateAsAdmin(Client model);
        IEnumerable<Client> GetClients();
        PaginationResult<Client> GetClients(PaginationParameters parameters);
        CATValidationResult InsertAsAdmin(Client client);
    }
}
