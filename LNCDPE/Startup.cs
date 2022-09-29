using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;

namespace LNCDPE
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices( IServiceCollection services )
        {
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure( IApplicationBuilder app, IHostingEnvironment env )
        {
              app.UseMvc( routes =>
              {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Dashboard}/{action=Index}/{id?}" );
              } );

              app.Use( async ( context, next ) => {
                  await next();
                if ( context.Response.StatusCode == 404 &&
                   !Path.HasExtension( context.Request.Path.Value ) &&
                   !context.Request.Path.Value.StartsWith( "/api/" ) )
                {
                //context.Request.Path = "/index.html";
                //await next();
                context.Response.ContentType = "text/html";

                await context.Response.SendFileAsync(
                    env.ContentRootFileProvider.GetFileInfo( @"wwwroot/index.html" )
                );
              }
            } );
            app.UseMvcWithDefaultRoute();
            app.UseDefaultFiles();
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseCookiePolicy();
        }
    }
}
