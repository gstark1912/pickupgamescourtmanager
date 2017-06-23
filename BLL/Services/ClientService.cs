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

        ICourtRepository _courtRepository;
        ICourtValidator _courtValidator;

        IClientScheduleRepository _clientScheduleRepository;
        public ClientService(IClientRepository clienteRepository, IClientValidator clienteValidator,
            ICourtRepository CourtRepository, ICourtValidator CourtValidator, IClientScheduleRepository clientScheduleRepository)
        {
            _clienteRepository = clienteRepository;
            _clienteValidator = clienteValidator;
            _courtRepository = CourtRepository;
            _courtValidator = CourtValidator;
            _clientScheduleRepository = clientScheduleRepository;
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

        public bool UpdateAsAdmin(Client model)
        {
            var entity = _clienteRepository.GetClientById(model.IDClient);

            if (entity == null)
                return false;

            entity.Name = model.Name;
            entity.Address = model.Address;
            entity.Coordenates = model.Coordenates;
            entity.Email = model.Email;

            UpdateCourts(entity, model.Court);
            UpdateSchedules(entity, model.ClientSchedule);

            if (!_clienteValidator.Validate(entity).IsValid)
                return false;

            _clienteRepository.Update(entity);
            _clienteRepository.SaveChanges();
            _clientScheduleRepository.SaveChanges();
            return true;
        }

        private void UpdateSchedules(Client entity, ICollection<ClientSchedule> clientSchedule)
        {
            var result = entity.ClientSchedule.ToList();
            var initialDays = result.Select(s => s.IDDay).ToList();
            var finalDays = clientSchedule.Select(s => s.IDDay).ToList();

            result.Where(x => !finalDays.Contains(x.IDDay)).ToList().ForEach(s => _clientScheduleRepository.Delete(s));
            clientSchedule.Where(s => !initialDays.Contains(s.IDDay)).ToList().ForEach(s => s.IDClientSchedule = 0);
            clientSchedule.Where(s => !initialDays.Contains(s.IDDay)).ToList().ForEach(s => _clientScheduleRepository.Insert(s));

            foreach (var item in clientSchedule.Where(s => initialDays.Contains(s.IDDay)))
            {
                var aux = result.First(r => r.IDDay == item.IDDay);
                aux.From = item.From;
                aux.To = item.To;
                aux.FromBreak = item.FromBreak;
                aux.ToBreak = item.ToBreak;
                aux.NoonBreak = item.NoonBreak;
            }
        }

        private void UpdateCourts(Client entity, ICollection<Court> court)
        {
            var result = entity.Court.ToList();
            var initialCourts = result.Select(s => s.IDCourt).ToList();
            var finalCourts = court.Select(s => s.IDCourt).ToList();

            result.Where(x => !finalCourts.Contains(x.IDCourt)).ToList().ForEach(s => _courtRepository.Delete(s));
            court.Where(s => !initialCourts.Contains(s.IDCourt)).ToList().ForEach(s => s.IDCourt = 0);
            court.Where(s => !initialCourts.Contains(s.IDCourt)).ToList().ForEach(s => _courtRepository.Insert(s));

            foreach (var item in court.Where(s => initialCourts.Contains(s.IDCourt)))
            {
                var aux = result.First(r => r.IDCourt == item.IDCourt);
                aux.IDCourtType = item.IDCourtType;
                aux.IDFloorType = item.IDFloorType;
                aux.Description = item.Description;
                aux.Value1 = item.Value1;
                aux.Value2 = item.Value2;
                aux.Value3 = item.Value3;
                aux.Value4 = item.Value4;
            }
        }

        /*
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
        */
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
