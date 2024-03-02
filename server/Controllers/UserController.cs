using Microsoft.AspNetCore.Mvc;
using server.Models;
using server.Services;

namespace server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController: ControllerBase
    {
        [HttpGet]
        [Route("GetUsers")]
        public List<User> GetUsers ()
        {
            UserService userService = new UserService();
            return userService.GetUsers();
        }
    }
}
