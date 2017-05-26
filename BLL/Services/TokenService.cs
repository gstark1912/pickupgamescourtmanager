using IBLL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Services
{
    public class TokenService : ITokenService
    {
        public bool DeleteByUserId(int userId)
        {
            throw new NotImplementedException();
        }

        public object GenerateToken(int userId)
        {
            throw new NotImplementedException();
        }

        public bool Kill(string tokenId)
        {
            throw new NotImplementedException();
        }

        public bool ValidateToken(string tokenId)
        {
            throw new NotImplementedException();
        }
    }
}
