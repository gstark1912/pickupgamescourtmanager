using MODEL;

namespace IDAL.Interfaces
{
    public interface ITokenRepository : IBaseRepository<Token>
    {
        Token GetToken(string tokenId);
        Token GetTokenByAuthToken(string tokenId);
        Token GetTokenByClientId(int clientId);
    }
}
