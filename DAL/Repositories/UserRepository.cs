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
    public class UserRepository : BaseRepository<User>, IUserRepository
    {
        public UserRepository(IUnitOfWork unitOfWork)
            : base(unitOfWork)
        {
        }

        public User GetUserByEmail(string userMail)
        {
            return dbSet
                .Where(u => u.Email.Equals(userMail))
                .FirstOrDefault();
        }


        /*public User GetByIDFromInvite(PlayerInvite invitedUser)
        {
            IQueryable<User> result;
            if (invitedUser.FromFacebook)
                result = dbSet.Where(u => u.FacebookId.Equals(invitedUser.Id));
            else
            {
                int id = Convert.ToInt32(invitedUser.Id);
                result = dbSet.Where(u => u.UserId == id);
            }

            return result.FirstOrDefault();
        }*/
    }
}
