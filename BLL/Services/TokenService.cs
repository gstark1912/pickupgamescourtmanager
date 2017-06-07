using IBLL.Interfaces;
using IDAL.Interfaces;
using MODEL;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Services
{
    public class TokenService : ITokenService
    {
        ITokenRepository _tokenRepository;
        public TokenService(ITokenRepository tokenRepository)
        {
            _tokenRepository = tokenRepository;
        }
        public bool DeleteByClientId(int clientId)
        {
            var entity = _tokenRepository.GetTokenByClientId(clientId);
            _tokenRepository.Delete(entity);
            _tokenRepository.SaveChanges();

            var isNotDeleted = _tokenRepository.GetTokenByClientId(clientId) != null;
            return !isNotDeleted;
        }

        public Token GenerateToken(int clientId)
        {
            string token = Guid.NewGuid().ToString();
            DateTime issuedOn = DateTime.Now;
            DateTime expiredOn = DateTime.Now.AddSeconds(
            Convert.ToDouble(ConfigurationManager.AppSettings["AuthTokenExpiry"]));
            var tokendomain = new Token
            {
                IDClient = clientId,
                AuthToken = token,
                IssuedOn = issuedOn,
                ExpiresOn = expiredOn
            };

            _tokenRepository.Insert(tokendomain);
            _tokenRepository.SaveChanges();
            var tokenModel = new Token()
            {
                IDClient = clientId,
                IssuedOn = issuedOn,
                ExpiresOn = expiredOn,
                AuthToken = token
            };

            return tokenModel;
        }

        public bool Kill(string tokenId)
        {
            var entity = _tokenRepository.GetTokenByAuthToken(tokenId);
            _tokenRepository.Delete(entity);
            _tokenRepository.SaveChanges();
            var isNotDeleted = _tokenRepository.GetTokenByAuthToken(tokenId) != null;
            if (isNotDeleted) { return false; }
            return true;
        }

        public bool ValidateToken(string tokenId)
        {
            var token = _tokenRepository.GetToken(tokenId);
            if (token != null && !(DateTime.Now > token.ExpiresOn))
            {
                token.ExpiresOn = DateTime.Now.AddSeconds(
                Convert.ToDouble(ConfigurationManager.AppSettings["AuthTokenExpiry"]));
                _tokenRepository.Update(token);
                _tokenRepository.SaveChanges();
                return true;
            }
            return false;
        }
    }
}
