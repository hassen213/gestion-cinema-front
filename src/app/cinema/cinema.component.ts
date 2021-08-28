import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CinemasService} from "../services/cinemas.service";

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {
  public villes:any
  public cinemas:any
  public currentVille:any
  public currentCinema:any
  public salles: any;

  public currentProjection: any;
  public selectedTickets: any;

  constructor(public cinemasService:CinemasService) { }

  ngOnInit(): void {
    this.cinemasService.getVilles()
      .subscribe(data=>{
        this.villes=data;
      },err=>{
        console.log(err);
      })
  }

  onGetCinemas(v: any) {
    this.currentVille=v;
    this.salles=undefined;
    this.cinemasService.getCinemas(v)
      .subscribe((data:any)=>{
        this.cinemas=data;
      },(err:any)=>{
        console.log(err);
      })
  }

  onGetSalles(c: any) {
    this.currentCinema=c;
    this.cinemasService.getSalles(c)
      .subscribe((data:any)=>{
        this.salles=data;
        this.salles._embedded.salles.forEach((salle:any)=>{
          this.cinemasService.getProjections(salle)
            .subscribe((data:any)=>{
              salle.projections=data;
            },(err:any)=>{
              console.log(err);
            })
        });
      },(err:any)=>{
        console.log(err);
      })
  }

  onGetTicketsPlaces(p: any) {
    this.currentProjection=p;
    console.log(p)
    this.cinemasService.getTicketsPlace(p)
      .subscribe((data:any)=>{
        this.currentProjection.tickets=data;
        this.selectedTickets=[];
      },(err:any)=>{
        console.log(err);
      })


  }

  onSelectTicket(t: any) {
      t.selected=!t.selected;
      this.selectedTickets.push(t);

  }

  getTicketClass(t: any) {
    let str="btn ticket ";
    if(t.reserve==true){
      str+="btn-danger";
    }
    else if(t.selected){
      str+="btn-warning"
    }
    else {
      str+="btn-succes"
    }
    return str;
  }

  onPayTickets(dataForm:any) {
      let tickets:any = [];
      this.selectedTickets.forEach((t:any)=>{
        tickets.push(t.id);
      });
      dataForm.tickets=tickets;
      this.cinemasService.payerTickets(dataForm)
        .subscribe((data:any)=>{
          alert("Ticket reserver avec succes !!")
          this.onGetTicketsPlaces(this.currentProjection);
        },(err:any)=>{
          console.log(err);
        })
  }
}
