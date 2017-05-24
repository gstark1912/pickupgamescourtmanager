using MODEL;
using IDAL.Interfaces;
using IBLL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Services
{
    public class UserService : IUserService
    {
        IUserRepository _userRepository;
        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public User LoginOrRegister(User user)
        {
            var existingUser = _userRepository.GetUserByEmail(user.Email);

            if (existingUser == null)
            {
                _userRepository.Insert(user);
                _userRepository.SaveChanges();

                return user;
            }
            else if (existingUser.IDFacebook == null)
            {
                if (existingUser.Password.Equals(user.Password))
                {
                    return existingUser;
                }
                return null;
            }

            if (existingUser.IDFacebook == user.IDFacebook)
                return existingUser;
            else
                return null;
        }
    }
}
