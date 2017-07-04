using FluentValidation.Results;
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

        public CATValidationResult Insert(Client model)
        {
            var validationResult = _clienteValidator.Validate(model);
            if (!validationResult.IsValid)
                return new CATValidationResult(validationResult.Errors);

            _clienteRepository.Insert(model);
            _clienteRepository.SaveChanges();
            return new CATValidationResult(validationResult.Errors);
        }

        public CATValidationResult InsertAsAdmin(Client model)
        {
            Client entity = new Client();

            entity.Name = model.Name;
            entity.Address = model.Address;
            entity.Coordenates = model.Coordenates;
            entity.Email = model.Email;

            entity.Court = model.Court;
            entity.ClientSchedule = model.ClientSchedule;
            entity.ClientNotes = model.ClientNotes;

            var validationResult = _clienteValidator.Validate(entity);
            if (!validationResult.IsValid)
                return new CATValidationResult(validationResult.Errors);

            _clienteRepository.Insert(entity);
            _clienteRepository.SaveChanges();
            return new CATValidationResult(validationResult.Errors);
        }

        public CATValidationResult UpdateAsAdmin(Client model)
        {
            var entity = _clienteRepository.GetClientById(model.IDClient);

            entity.Name = model.Name;
            entity.Address = model.Address;
            entity.Coordenates = model.Coordenates;
            entity.Email = model.Email;

            UpdateCourts(entity, model.Court);
            UpdateSchedules(entity, model.ClientSchedule);
            UpdateClientNotes(entity, model.ClientNotes);

            var validationResult = _clienteValidator.Validate(entity);
            if (!validationResult.IsValid)
                return new CATValidationResult(validationResult.Errors);

            _clienteRepository.Update(entity);
            _clienteRepository.SaveChanges();
            _clientScheduleRepository.SaveChanges();
            return new CATValidationResult(validationResult.Errors);
        }

        private void UpdateClientNotes(Client entity, ICollection<ClientNotes> clientNotes)
        {
            var initialNotes = entity.ClientNotes.Select(cn => cn.IDClientNotes).ToList();
            foreach (var item in clientNotes.Where(n => !initialNotes.Contains(n.IDClientNotes)))
            {
                entity.ClientNotes.Add(item);
            }
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
            court.Where(s => !initialCourts.Contains(s.IDCourt)).Count();
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
