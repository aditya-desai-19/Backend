using server.Models;

namespace server.Services
{
    public class UserService
    {
        public List<User> Users { get; set; }

        public List<User> GetUsers()
        {
            var defaultUsers = new List<User>
            {
                new User { Id = 1, Name = "Shreyas"},
                new User { Id = 2, Name = "Vaibhav"},
            };

            Users = defaultUsers;

            return Users;
        }
    }
}
