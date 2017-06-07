using IDAL.Context.Interfaces;
using IDAL.Interfaces;
using MODEL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories
{
    public class ClientRepository : BaseRepository<Client>, IClientRepository
    {
        public ClientRepository(IUnitOfWork uow)
            : base(uow)
        {

        }

        public Client Authenticate(string username, string password)
        {
            return dbSet.FirstOrDefault(c => c.Email.Equals(username) && c.Password.Equals(password));
        }

        public PaginationResult<Client> GetAllPaginated(PaginationParameters parameters)
        {
            PaginationResult<Client> result = new PaginationResult<Client>();
            IQueryable<Client> query = dbSet
                .OrderBy(c => c.Name)
                .Where(c => c.Name.Contains(parameters.Criteria)
            || c.Address.Contains(parameters.Criteria));

            result.TotalCount = query.Count();
            result.TotalPages = (int)Math.Ceiling((double)result.TotalCount / parameters.Take);
            result.Page = parameters.CurrentPage;
            result.Results = query
                .Skip((parameters.CurrentPage - 1) * parameters.Take)
                .Take(parameters.Take)
                .ToList();

            return result;
        }
    }
}
