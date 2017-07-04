﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MODEL
{
    public class CATValidationException : Exception
    {
        public CATValidationException(string error)
        {
            this.Errors = new List<string> { error };
        }
        public List<string> Errors { get; set; }
    }
}
