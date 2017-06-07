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
        IClientRepository _clienteRepository;
        IClientValidator _clienteValidator;

        ICourtRepository _CourtRepository;
        ICourtValidator _CourtValidator;
        public ClientService(IClientRepository clienteRepository, IClientValidator clienteValidator,
            ICourtRepository CourtRepository, ICourtValidator CourtValidator)
        {
            _clienteRepository = clienteRepository;
            _clienteValidator = clienteValidator;
            _CourtRepository = CourtRepository;
            _CourtValidator = CourtValidator;
        }

        public Client Authenticate(string username, string password)
        {
            return _clienteRepository.Authenticate(username, password);
        }

        public Client GetClienteById(int clientId)
        {
            return _clienteRepository.GetByID(clientId);
        }

        public bool Insert(Client model)
        {
            if (!_clienteValidator.Validate(model).IsValid)
                return false;

            _clienteRepository.Insert(model);
            _clienteRepository.SaveChanges();
            return true;
        }

        public bool Update(Client model)
        {
            var entity = _clienteRepository.GetByID(model.IDClient);

            if (entity == null)
                return false;

            entity.Name = model.Name;
            entity.Address = model.Address;
            entity.Coordenates = model.Coordenates;

            if (!_clienteValidator.Validate(entity).IsValid)
                return false;

            _clienteRepository.Update(entity);
            _clienteRepository.SaveChanges();
            return true;
        }

        public bool UpdateCourts(int clientId, List<Court> courts)
        {
            var entity = _clienteRepository.GetByID(clientId);

            if (entity == null)
                return false;

            var finalCourts = courts.Select(c => c.IDCourt);
            var existingCourts = entity.Court.Where(c => !c.IsSoccer).Select(c => c.IDCourt);

            foreach (var item in entity.Court.Where(c => !c.IsSoccer && finalCourts.Contains(c.IDCourt))) //updates
            {
                var aux = courts.FirstOrDefault(c => c.IDCourt == item.IDCourt);
                item.Value1 = aux.Value1;
                item.Value2 = aux.Value2;
                item.Value3 = aux.Value3;
                item.Value4 = aux.Value4;
                item.IDCourtType = aux.IDCourtType;
                item.Description = aux.Description;
            }

            foreach (var item in courts.Where(c => !existingCourts.Contains(c.IDCourt))) //insert
            {
                if (_CourtValidator.Validate(item).IsValid)
                    entity.Court.Add(item);
                else
                    throw new Exception("Se rompio todo wacho");//TODO
            }

            foreach (var item in entity.Court.Where(c => !c.IsSoccer && !finalCourts.Contains(c.IDCourt))) //delete
            {
                _CourtRepository.Delete(item.IDCourt);
            }

            _clienteRepository.SaveChanges();

            return true;
        }

        public IEnumerable<Client> GetClients()
        {
            return _clienteRepository.GetAll();
        }

        public PaginationResult<Client> GetClients(PaginationParameters parameters)
        {
            return _clienteRepository.GetAllPaginated(parameters);
        }
    }
}
