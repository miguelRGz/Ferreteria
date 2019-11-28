using Ferreteria.Models;
using Ferreteria.Servicios;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ferreteria.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private readonly UsuariosServices _usuarioService;

        public UsuariosController(UsuariosServices usuarioService)
        {
            _usuarioService = usuarioService;
        }

        [HttpGet]
        public ActionResult<List<Usuarios>> Get() =>
            _usuarioService.Get();

        [HttpGet("{id:length(24)}")]
        public ActionResult<Usuarios> Get(string id)
        {
            var usuario = _usuarioService.Get(id);
            if (usuario == null)
            {
                return NotFound();
            }
            return usuario;
        }

        [HttpPost]
        public ActionResult<Usuarios> Create(Usuarios usuario)
        {
            _usuarioService.Create(usuario);
            return CreatedAtRoute("GetUsuario", new { id = usuario.Id.ToString() }, usuario);
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, Usuarios usuarioIn)
        {
            var usuario = _usuarioService.Get(id);
            if (usuario == null)
            {
                return NotFound();
            }

            _usuarioService.Update(id, usuarioIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var usuario = _usuarioService.Get(id);
            if (usuario == null)
            {
                return NotFound();
            }

            _usuarioService.Remove(usuario.Id);

            return NoContent();
        }
    }
}
