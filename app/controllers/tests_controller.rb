class TestsController < ApplicationController
  
  def index
    
  end
  
  def grab_html
    @test = Test.find_by_title('HTML') 
    
    respond_to do |format|
      format.html { render :text => @test.info }
    end                 
  end       
  
  def grab_xml
    @test = Test.find_by_title('XML')
    
    respond_to do |format|
      format.xml { render :xml => @test }  
    end
  end   
  
  def grab_json
    @test = Test.find_by_title('JSON')
    
    respond_to do |format|
      format.json { render :json => @test }  
    end
  end    
  
  def grab_script 
    @test = Test.find_by_title('SCRIPT')
    
    respond_to do |format|
      format.js   
    end
  end

end
