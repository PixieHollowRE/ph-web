package com.disney.fairies.managers
{
   import com.disney.fairies.media.WebappRequest;
   import com.disney.fairies.util.CalendarUtils;
   import com.disney.log.Logger;
   import flash.events.Event;
   import flash.events.EventDispatcher;
   import flash.events.TimerEvent;
   
   public class PixieHollowDateTimeManager extends EventDispatcher
   {
      
      private static var _instance:PixieHollowDateTimeManager;
      
      private static const log:Logger = Logger.getLogger(PixieHollowDateTimeManager);
      
      public static const UPDATE_PIXIE_HOLLOW_TIME:String = "updatePixieHollowTime";
      
      private var _listenerCount:Number = 0;
      
      private var _timerOn:Boolean = false;
      
      private var _PixiHollowDate:Object;
      
      private var _computerTimeOffset:Object;
      
      private var _PixiHollowStartDate:Object;
      
      private var _PixiHollowTime:Object;
      
      private var _serverData:XML;
      
      private var _computerStartTime:Object;
      
      public function PixieHollowDateTimeManager()
      {
         super();
         log.debug("PixieHollowDateTimeManager INIT");
         this._PixiHollowStartDate = new Object();
         this._PixiHollowStartDate.year = 0;
         this._PixiHollowStartDate.month = 0;
         this._PixiHollowStartDate.day = 0;
         this._PixiHollowStartDate = new Object();
         this._PixiHollowStartDate.hour = 0;
         this._PixiHollowStartDate.minute = 0;
         this._PixiHollowDate = new Object();
         this._PixiHollowDate.year = 0;
         this._PixiHollowDate.month = 0;
         this._PixiHollowDate.day = 0;
         this._PixiHollowTime = new Object();
         this._PixiHollowTime.hour = 0;
         this._PixiHollowTime.minute = 0;
         this._computerStartTime = new Object();
         this._computerTimeOffset = new Object();
      }
      
      public static function getInstance() : PixieHollowDateTimeManager
      {
         if(_instance == null)
         {
            _instance = new PixieHollowDateTimeManager();
         }
         return _instance;
      }
      
      private function onTimedUpdate(param1:TimerEvent) : void
      {
         this.onUpdateTime();
      }
      
      public function get PixieHollowYear() : int
      {
         this.onUpdateTime();
         return this._PixiHollowDate.year;
      }
      
      private function parseDate(param1:XML) : void
      {
         this._serverData = param1;
         var _loc2_:Array = this._serverData.day.split("/");
         var _loc3_:Array = this._serverData.time.split(":");
         this._PixiHollowDate.year = this._PixiHollowStartDate.year = int(_loc2_[0]);
         this._PixiHollowDate.month = this._PixiHollowStartDate.month = int(_loc2_[1]);
         this._PixiHollowDate.day = this._PixiHollowStartDate.day = int(_loc2_[2]);
         this._PixiHollowTime.hour = this._PixiHollowStartDate.hour = int(_loc3_[0]);
         this._PixiHollowTime.minute = this._PixiHollowStartDate.minute = int(_loc3_[1]);
      }
      
      public function get currentSeason() : String
      {
         this.onUpdateTime();
         var _loc1_:Object = new Object();
         _loc1_.year = this._PixiHollowDate.year;
         _loc1_.month = this._PixiHollowDate.month;
         _loc1_.day = this._PixiHollowDate.day;
         var _loc2_:Object = CalendarUtils.getSeasons(_loc1_);
         return _loc2_.currentseason;
      }
      
      public function get PixieHollowMonth() : int
      {
         this.onUpdateTime();
         return this._PixiHollowDate.month;
      }
      
      public function get PixieHollowDay() : int
      {
         this.onUpdateTime();
         return this._PixiHollowDate.day;
      }
      
      public function get PixieHollowMinute() : int
      {
         this.onUpdateTime();
         return this._PixiHollowTime.minute;
      }
      
      private function onDispatchTime() : void
      {
         dispatchEvent(new Event(UPDATE_PIXIE_HOLLOW_TIME));
      }
      
      public function get PixieHollowDateTime() : Object
      {
         this.onUpdateTime();
         var _loc1_:Object = new Object();
         _loc1_.year = this._PixiHollowDate.year;
         _loc1_.month = this._PixiHollowDate.month;
         _loc1_.day = this._PixiHollowDate.day;
         _loc1_.hour = this._PixiHollowTime.hour;
         _loc1_.minute = this._PixiHollowTime.minute;
         return _loc1_;
      }
      
      public function get PixieHollowHour() : int
      {
         this.onUpdateTime();
         return this._PixiHollowTime.hour;
      }
      
      private function requestSeverTime() : void
      {
         WebappRequest.pixiehollowTimeRequest(this.onSetPixieHollowTimer);
      }
      
      private function setComputerStartTime() : void
      {
         var _loc1_:Date = new Date();
         this._computerStartTime.year = _loc1_.getFullYear();
         this._computerStartTime.month = _loc1_.getMonth() + 1;
         this._computerStartTime.day = _loc1_.getDate();
         this._computerStartTime.hour = _loc1_.getHours();
         this._computerStartTime.minute = _loc1_.getMinutes();
         this._computerStartTime.second = _loc1_.getSeconds();
         this._computerStartTime.time = _loc1_.getTime();
      }
      
      private function onUpdateTime() : void
      {
         var now:Date = new Date();
         var elapsedMs:Number = now.getTime() - Number(this._computerStartTime.time);
         if(elapsedMs < 0)
         {
            elapsedMs = 0;
         }
         var elapsedMinutes:int = int(elapsedMs / 60000);
         var baseMinutes:int = int(this._PixiHollowStartDate.hour) * 60 + int(this._PixiHollowStartDate.minute);
         var totalMinutes:int = baseMinutes + elapsedMinutes;
         var extraDays:int = int(Math.floor(totalMinutes / 1440));
         var dayMinutes:int = totalMinutes % 1440;
         if(dayMinutes < 0)
         {
            dayMinutes += 1440;
         }
         this._PixiHollowTime.hour = int(dayMinutes / 60);
         this._PixiHollowTime.minute = dayMinutes % 60;
         var rolled:Date = new Date(
            int(this._PixiHollowStartDate.year),
            int(this._PixiHollowStartDate.month) - 1,
            int(this._PixiHollowStartDate.day) + extraDays
         );
         this._PixiHollowDate.year = rolled.getFullYear();
         this._PixiHollowDate.month = rolled.getMonth() + 1;
         this._PixiHollowDate.day = rolled.getDate();
         log.debug("onUpdateTime Pixie Hollow Time year=" + this._PixiHollowDate.year + " month=" + this._PixiHollowDate.month + " day=" + this._PixiHollowDate.day + " hour=" + this._PixiHollowTime.hour + " minute=" + this._PixiHollowTime.minute);
         this.onDispatchTime();
      }
      
      public function get nextSeason() : String
      {
         var _loc1_:Object = new Object();
         _loc1_.year = this._PixiHollowDate.year;
         _loc1_.month = this._PixiHollowDate.month;
         _loc1_.day = this._PixiHollowDate.day;
         var _loc2_:Object = CalendarUtils.getSeasons(_loc1_);
         return _loc2_.nextseason;
      }
      
      public function getCurrentTime() : void
      {
         this.requestSeverTime();
      }
      
      private function setComputerTimeOffset() : void
      {
         this._computerTimeOffset.year = this._computerStartTime.year - this._PixiHollowDate.year;
         this._computerTimeOffset.month = this._computerStartTime.month - this._PixiHollowDate.month;
         this._computerTimeOffset.day = this._computerStartTime.day - this._PixiHollowDate.day;
         this._computerTimeOffset.hour = this._computerStartTime.hour - this._PixiHollowTime.hour;
         this._computerTimeOffset.minute = this._computerStartTime.minute - this._PixiHollowTime.minute;
      }
      
      public function onSetPixieHollowTimer(param1:WebappRequest, param2:Boolean) : void
      {
         var request:WebappRequest = param1;
         var success:Boolean = param2;
         if(!success)
         {
            log.warn("FAILED TO LOAD PIXIEHOLLOW TIME");
         }
         else
         {
            this.parseDate(request.response.children().(name() == "server-time")[0] as XML);
            this.setComputerStartTime();
            this.setComputerTimeOffset();
            this.onDispatchTime();
         }
      }
   }
}
