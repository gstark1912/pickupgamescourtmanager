using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MODEL
{
    public class PaginationParameters
    {
        public PaginationParameters()
        {
            this.Take = 10;
        }

        public int CurrentPage { get; set; }
        public string Criteria { get; set; }
        public int Take { get; set; }
    }

    public class PaginationResult<T>
    {
        public IEnumerable<T> Results { get; set; }
        public int TotalPages { get; set; }
        public int Page { get; set; }
        public int TotalCount { get; set; }
    }
}
