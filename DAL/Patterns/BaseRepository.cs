using DAL.Context;
using IDAL;
using IDAL.Context.Interfaces;
using MODEL;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class BaseRepository<TEntity> : IBaseRepository<TEntity> where TEntity : class
    {
        private readonly BrappContext _context;
        protected DbSet<TEntity> dbSet { get; set; }

        public BaseRepository(IUnitOfWork unitOfWork)
        {
            _context = unitOfWork.DbContext;
            dbSet = _context.Set<TEntity>();
        }

        public void Insert(TEntity entity)
        {
            if (entity == null)
                throw new ArgumentNullException("Entidad", "La entidad no puede ser null.");

            dbSet.Add(entity);
        }

        public void Update(TEntity entity)
        {
            dbSet.Attach(entity);
            _context.Entry(entity).State = EntityState.Modified;
        }

        public void Delete(TEntity entity)
        {
            dbSet.Remove(entity);
        }

        public void Delete(int id)
        {
            dbSet.Remove(this.GetByID(id));
        }

        public TEntity GetByID(int id)
        {
            return dbSet.Find(id);
        }

        public List<TEntity> GetAll()
        {
            return dbSet.ToList();
        }

        public void SaveChanges()
        {
            try
            {
                _context.SaveChanges();
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
    }
}
