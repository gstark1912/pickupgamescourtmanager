using MODEL;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IDAL.Context.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        BrappContext DbContext { get; }
        int Save();
    }
}
