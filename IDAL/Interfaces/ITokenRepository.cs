using MODEL;
using System.Collections.Generic;

namespace IDAL.Interfaces
{
    public interface ITokenRepository : IBaseRepository<Token>
    {
        Token GetToken(string tokenId);
        Token GetTokenByAuthToken(string tokenId);
        IEnumerable<Token> GetTokensByClient(string tokenId);
        Token GetTokenByClientId(int clientId);
    }
}
