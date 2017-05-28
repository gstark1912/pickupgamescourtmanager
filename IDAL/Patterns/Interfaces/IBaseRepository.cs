using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MODEL;

namespace IDAL
{
    public interface IBaseRepository<TEntity> where TEntity : class
    {
        void Insert(TEntity entity);

        void Update(TEntity entity);

        void Delete(int id);
        void Delete(TEntity entity);
        TEntity GetByID(int id);

        List<TEntity> GetAll();

        void SaveChanges();
    }
}
