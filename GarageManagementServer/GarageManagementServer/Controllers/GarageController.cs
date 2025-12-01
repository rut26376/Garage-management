using GarageManagementServer.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.Globalization;
using System.Net.Http.Json;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
namespace GarageManagementServer.Controllers
{
    [Route("Garage")]
    [ApiController]
    public class GarageController : ControllerBase
    {
        private WebDbContext _context;
        public GarageController(WebDbContext context)
        {
            _context = context;
        }

        [HttpGet("/getAllGarages")]
        public async Task<IActionResult> getAll()
        {
            HttpClient _httpClient = new HttpClient();
            var response = await _httpClient.GetAsync("https://data.gov.il/api/3/action/datastore_search?resource_id=bb68386a-a331-4bbc-b668-bba2766d517d&limit=5");
            response.EnsureSuccessStatusCode();

            var jsonString = await response.Content.ReadAsStringAsync();
            var jsonResponse = JsonConvert.DeserializeObject<GarageApiResponse>(jsonString);
            await addGaragesToDB(jsonResponse.Result.Records);
            return Ok(jsonResponse.Result.Records);
        }
        private async Task addGaragesToDB(List<Garage> garages)
        {
            foreach (var garage in garages)
            {
                garage._id = 0;
            }

            await _context.AddRangeAsync(garages);

            await _context.SaveChangesAsync();

        }


    }
    public class GarageApiResponse
    {
        public GarageApiResult Result { get; set; }
    }

    public class GarageApiResult
    {
        public List<Garage> Records { get; set; }
    }
}
