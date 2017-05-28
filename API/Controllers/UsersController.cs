using MODEL;
using IBLL.Interfaces;
using System;
using System.Web.Http;
using API.Models;

namespace API.Controllers
{
    [RoutePrefix("api/users")]
    public class UsersController : ApiController
    {
        /*
        IUserService _userService;
        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [Route("")]
        [HttpPost]
        public IHttpActionResult LoginOrRegister(RegisterUserViewModel user)
        {
            _userService.LoginOrRegister(ConvertToEntity(user));
            return Ok(true);
        }

        private User ConvertToEntity(RegisterUserViewModel viewModel)
        {
            User entity = new User();
            entity.Username = viewModel.userName;
            entity.Email = viewModel.email;
            entity.FirstName = viewModel.firstName;
            entity.LastName = viewModel.lastName;
            entity.Gender = viewModel.gender;
            if (!String.IsNullOrEmpty(viewModel.birthDate))
                entity.Birthdate = Convert.ToDateTime(viewModel.birthDate);
            entity.IDFacebook = viewModel.idFacebook;
            entity.PhotoUrl = viewModel.photoUrl;
            entity.Password = viewModel.password;
            return entity;
        }
        */
    }
}