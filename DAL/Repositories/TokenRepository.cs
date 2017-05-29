using MODEL;
using IDAL.Context.Interfaces;
using IDAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories
{
    public class TokenRepository : BaseRepository<Token>, ITokenRepository
    {
        public TokenRepository(IUnitOfWork unitOfWork)
            : base(unitOfWork)
        {
        }

        public Token GetToken(string tokenId)
        {
            return dbSet.Where(t => t.AuthToken == tokenId && t.ExpiresOn > DateTime.Now).FirstOrDefault();
        }

        public Token GetTokenByAuthToken(string tokenId)
        {
            return dbSet.Where(t => t.AuthToken == tokenId).FirstOrDefault();
        }

        public Token GetTokenByClientId(int clientId)
        {
            return dbSet.Where(t => t.IDCliente == clientId).FirstOrDefault();
        }
        
        public IEnumerable<Token> GetTokensByClient(int clientId)
        {
            return dbSet.Where(t => t.IDCliente == clientId);
        }
    }
}
