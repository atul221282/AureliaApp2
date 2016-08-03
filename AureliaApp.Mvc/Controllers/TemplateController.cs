using System.Threading.Tasks;
using System.Web.Mvc;

namespace AureliaApp.Mvc.Controllers
{
    public class TemplateController : Controller
    {
        // GET: Template
        [AllowAnonymous, OutputCache(Duration = 30, VaryByParam = "feature;name")]
        public async Task<ActionResult> Render(string feature, string name)
        {
            if (!string.IsNullOrEmpty(name))
                return PartialView(await Task.FromResult<string>($"~/dist/{feature}/{name}.cshtml"));
            else
                return PartialView(await Task.FromResult<string>($"~/dist/{feature}.cshtml"));
        }
    }
}