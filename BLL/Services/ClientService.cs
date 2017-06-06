using IBLL.Interfaces;
using IDAL.Interfaces;
using MODEL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Services
{
    public class ClientService : IClientService
    {
        IClienteRepository _clienteRepository;
        IClienteValidator _clienteValidator;

        ICanchaRepository _canchaRepository;
        ICanchaValidator _canchaValidator;
        public ClientService(IClienteRepository clienteRepository, IClienteValidator clienteValidator,
            ICanchaRepository canchaRepository, ICanchaValidator canchaValidator)
        {
            _clienteRepository = clienteRepository;
            _clienteValidator = clienteValidator;
            _canchaRepository = canchaRepository;
            _canchaValidator = canchaValidator;
        }

        public Cliente Authenticate(string username, string password)
        {
            return _clienteRepository.Authenticate(username, password);
        }

        public Cliente GetClienteById(int clientId)
        {
            return _clienteRepository.GetByID(clientId);
        }

        public bool Insert(Cliente model)
        {
            if (!_clienteValidator.Validate(model).IsValid)
                return false;

            _clienteRepository.Insert(model);
            _clienteRepository.SaveChanges();
            return true;
        }

        public bool Update(Cliente model)
        {
            var entity = _clienteRepository.GetByID(model.IDCliente);

            if (entity == null)
                return false;

            entity.Nombre = model.Nombre;
            entity.Dirección = model.Dirección;
            entity.Coordenadas = model.Coordenadas;

            if (!_clienteValidator.Validate(entity).IsValid)
                return false;

            _clienteRepository.Update(entity);
            _clienteRepository.SaveChanges();
            return true;
        }

        public bool UpdateCourts(int clientId, List<Cancha> courts)
        {
            var entity = _clienteRepository.GetByID(clientId);

            if (entity == null)
                return false;

            var finalCourts = courts.Select(c => c.IDCancha);
            var existingCourts = entity.Cancha.Where(c => !c.EsFutbol).Select(c => c.IDCancha);

            foreach (var item in entity.Cancha.Where(c => !c.EsFutbol && finalCourts.Contains(c.IDCancha))) //updates
            {
                var aux = courts.FirstOrDefault(c => c.IDCancha == item.IDCancha);
                item.Valor1 = aux.Valor1;
                item.Valor2 = aux.Valor2;
                item.Valor3 = aux.Valor3;
                item.Valor4 = aux.Valor4;
                item.IDTipoCancha = aux.IDTipoCancha;
                item.Descripcion = aux.Descripcion;
            }

            foreach (var item in courts.Where(c => !existingCourts.Contains(c.IDCancha))) //insert
            {
                if (_canchaValidator.Validate(item).IsValid)
                    entity.Cancha.Add(item);
                else
                    throw new Exception("Se rompio todo wacho");//TODO
            }

            foreach (var item in entity.Cancha.Where(c => !c.EsFutbol && !finalCourts.Contains(c.IDCancha))) //delete
            {
                _canchaRepository.Delete(item.IDCancha);
            }

            _clienteRepository.SaveChanges();

            return true;
        }

        public IEnumerable<Cliente> GetClients()
        {
            return _clienteRepository.GetAll();
        }

        public PaginationResult<Cliente> GetClients(PaginationParameters parameters)
        {
            return _clienteRepository.GetAllPaginated(parameters);
        }
    }
}
