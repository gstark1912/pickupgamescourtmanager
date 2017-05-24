using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MODEL.Common.Enums
{
    public static class Define
    {
        public enum OrderBy
        {
            Ascendant = 1,
            Descendant = 2
        }

        public enum RoleAssignationState
        {
            Assigned = 1,
            NotAssigned = 2
        }

        public static OrderBy OrderByFrom(string sord)
        {
            return sord == "asc" ? Define.OrderBy.Ascendant : Define.OrderBy.Descendant;
        }
    }
}
