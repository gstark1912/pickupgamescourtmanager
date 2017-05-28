//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MODEL
{
    using System;
    using System.Collections.Generic;
    
    public partial class Cancha
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Cancha()
        {
            this.Reserva = new HashSet<Reserva>();
        }
    
        public int IDCancha { get; set; }
        public string Descripcion { get; set; }
        public int IDTipoCancha { get; set; }
        public int IDTipoPiso { get; set; }
        public int IDCliente { get; set; }
        public Nullable<decimal> Valor1 { get; set; }
        public Nullable<decimal> Valor2 { get; set; }
        public Nullable<decimal> Valor3 { get; set; }
        public Nullable<decimal> Valor4 { get; set; }
        public bool EsFutbol { get; set; }
    
        public virtual Cliente Cliente { get; set; }
        public virtual TipoCancha TipoCancha { get; set; }
        public virtual TipoPiso TipoPiso { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Reserva> Reserva { get; set; }
    }
}
