using MODEL;

namespace IDAL.Interfaces
{
    public interface IUserRepository : IBaseRepository<User>
    {
        User GetUserByEmail(string userMail);
    }
}
